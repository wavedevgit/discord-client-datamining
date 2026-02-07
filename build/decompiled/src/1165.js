// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var7 = require;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var6;
    var0 = function() {
        _fun12707: for (var _fun12707_ip = 0;;) switch (_fun12707_ip) {
            case 0:
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 0;
                var1 = var1[var0];
                var0 = undefined;
                var2 = var2.bind(var0)(var1);
                var1 = var2.isWeb;
                var1 = var1.bind(var2)();
                if (var1) {
                    _fun12707_ip = 61;
                    continue _fun12707
                }
            case 37:
                var1 = new Array(1);
                var2 = /.*/;
                var1[0] = var2;
                return var1;
            case 61:
                return var0;
        }
    };
    var _closure1_slot4 = var0;
    var1 = function arg0() {
        var2 = arg0;
        var1 = var2.getIntegrationByName;
        var0 = _closure1_slot2;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var _closure1_slot5 = var1;
    var0 = global;
    var8 = var0.Object;
    var5 = var8.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var5.bind(var8)(var2, var0, var4);
    var5 = 'ReactNativeTracing';
    var _closure1_slot2 = var5;
    var4 = {
        'traceFetch': null,
        'traceXHR': true,
        'enableHTTPTimings': true
    };
    var0 = 0;
    var6 = var6[var0];
    var0 = undefined;
    var7 = var7.bind(var0)(var6);
    var6 = var7.isWeb;
    var6 = var6.bind(var7)();
    var6 = !var6;
    var6 = !var6;
    var4.traceFetch = var6;
    var _closure1_slot3 = var4;
    var2.INTEGRATION_NAME = var5;
    var2.defaultReactNativeTracingOptions = var4;
    var4 = function() {
        _fun12709: for (var _fun12709_ip = 0;;) switch (_fun12709_ip) {
            case 0:
                var6 = undefined;
                var2 = undefined;
                var3 = arguments.length;
                var0 = 0;
                if (!(var3 > var0)) {
                    _fun12709_ip = 23;
                    continue _fun12709
                }
            case 15:
                var3 = arguments[var0];
                if (!(var6 === var3)) {
                    _fun12709_ip = 27;
                    continue _fun12709
                }
            case 23:
                var9 = {};
                _fun12709_ip = 31;
                continue _fun12709;
            case 27:
                var9 = arguments[var0];
            case 31:
                var2 = {};
                var2.currentRoute = var6;
                var _closure2_slot0 = var2;
                var0 = global;
                var7 = var0.Object;
                var5 = var7.assign;
                var8 = var0.Object;
                var3 = var8.assign;
                var12 = var0.Object;
                var11 = var12.assign;
                var10 = _closure1_slot3;
                var0 = {};
                var0 = var11.bind(var12)(var0, var10);
                var3 = var3.bind(var8)(var0, var9);
                var0 = {};
                var10 = var9.beforeStartSpan;
                var8 = null;
                if (!(var8 !== var10)) {
                    _fun12709_ip = 116;
                    continue _fun12709
                }
            case 112:
                if (!(var6 === var10)) {
                    _fun12709_ip = 121;
                    continue _fun12709
                }
            case 116:
                var10 = function(arg0) { // Environment: var1
                    var0 = arg0;
                    return var0;
                };
            case 121:
                var0.beforeStartSpan = var10;
                var10 = var9.finalTimeoutMs;
                if (!(var8 !== var10)) {
                    _fun12709_ip = 140;
                    continue _fun12709
                }
            case 136:
                if (!(var6 === var10)) {
                    _fun12709_ip = 172;
                    continue _fun12709
                }
            case 140:
                var12 = _closure1_slot0;
                var13 = _closure1_slot1;
                var11 = 1;
                var11 = var13[var11];
                var11 = var12.bind(var6)(var11);
                var11 = var11.defaultIdleOptions;
                var10 = var11.finalTimeout;
            case 172:
                var0.finalTimeoutMs = var10;
                var9 = var9.idleTimeoutMs;
                if (!(var8 !== var9)) {
                    _fun12709_ip = 191;
                    continue _fun12709
                }
            case 187:
                if (!(var6 === var9)) {
                    _fun12709_ip = 223;
                    continue _fun12709
                }
            case 191:
                var11 = _closure1_slot0;
                var12 = _closure1_slot1;
                var10 = 1;
                var10 = var12[var10];
                var10 = var11.bind(var6)(var10);
                var10 = var10.defaultIdleOptions;
                var9 = var10.idleTimeout;
            case 223:
                var0.idleTimeoutMs = var9;
                var3 = var5.bind(var7)(var3, var0);
                var _closure2_slot1 = var3;
                var0 = var3.shouldCreateSpanForRequest;
                var _closure2_slot2 = var0;
                var7 = _closure1_slot0;
                var9 = _closure1_slot1;
                var5 = 2;
                var5 = var9[var5];
                var7 = var7.bind(var6)(var5);
                var5 = var7.getDevServer;
                var7 = var5.bind(var7)();
                var5 = undefined;
                if (!(var8 !== var7)) {
                    _fun12709_ip = 295;
                    continue _fun12709
                }
            case 284:
                var5 = undefined;
                if (!(var5 !== var7)) {
                    _fun12709_ip = 295;
                    continue _fun12709
                }
            case 290:
                var5 = var7.url;
            case 295:
                var _closure2_slot3 = var5;
                if (!(var6 !== var5)) {
                    _fun12709_ip = 308;
                    continue _fun12709
                }
            case 303:
                var0 = function(arg0) { // Environment: var1
                    _fun12711: for (var _fun12711_ip = 0;;) switch (_fun12711_ip) {
                        case 0:
                            var4 = arg0;
                            var1 = var4.startsWith;
                            var0 = _closure2_slot3;
                            var0 = var1.bind(var4)(var0);
                            var0 = !var0;
                            if (!var0) {
                                _fun12711_ip = 51;
                                continue _fun12711
                            }
                        case 27:
                            var1 = _closure2_slot2;
                            var1 = !var1;
                            if (var1) {
                                _fun12711_ip = 48;
                                continue _fun12711
                            }
                        case 37:
                            var3 = _closure2_slot2;
                            var2 = undefined;
                            var1 = var3.bind(var2)(var4);
                        case 48:
                            var0 = var1;
                        case 51:
                            return var0;
                    }
                };
            case 308:
                var3.shouldCreateSpanForRequest = var0;
                var0 = {};
                var4 = _closure1_slot2;
                var0.name = var4;
                var4 = function arg0() {
                    _fun12712: for (var _fun12712_ip = 0;;) switch (_fun12712_ip) {
                        case 0:
                            var4 = arg0;
                            var2 = _closure1_slot0;
                            var3 = _closure1_slot1;
                            var1 = 1;
                            var5 = var3[var1];
                            var0 = undefined;
                            var7 = var2.bind(var0)(var5);
                            var5 = var7.addDefaultOpForSpanFrom;
                            var5 = var5.bind(var7)(var4);
                            var1 = var3[var1];
                            var5 = var2.bind(var0)(var1);
                            var1 = var5.addThreadInfoToSpan;
                            var1 = var1.bind(var5)(var4);
                            var1 = 3;
                            var1 = var3[var1];
                            var3 = var2.bind(var0)(var1);
                            var2 = var3.instrumentOutgoingRequests;
                            var1 = {};
                            var7 = _closure2_slot1;
                            var7 = var7.traceFetch;
                            var1.traceFetch = var7;
                            var7 = _closure2_slot1;
                            var7 = var7.traceXHR;
                            var1.traceXHR = var7;
                            var5 = _closure2_slot1;
                            var5 = var5.shouldCreateSpanForRequest;
                            var1.shouldCreateSpanForRequest = var5;
                            var5 = var4.getOptions;
                            var5 = var5.bind(var4)();
                            var5 = var5.tracePropagationTargets;
                            if (var5) {
                                _fun12712_ip = 154;
                                continue _fun12712
                            }
                        case 146:
                            var6 = _closure1_slot4;
                            var5 = var6.bind(var0)();
                        case 154:
                            var1.tracePropagationTargets = var5;
                            var1 = var2.bind(var3)(var4, var1);
                            return var0;
                    }
                };
                var0.setup = var4;
                var4 = function arg0() {
                    _fun12713: for (var _fun12713_ip = 0;;) switch (_fun12713_ip) {
                        case 0:
                            var0 = arg0;
                            var1 = var0.contexts;
                            if (!var1) {
                                _fun12713_ip = 25;
                                continue _fun12713
                            }
                        case 12:
                            var2 = _closure2_slot0;
                            var1 = var2.currentRoute;
                        case 25:
                            if (!var1) {
                                _fun12713_ip = 99;
                                continue _fun12713
                            }
                        case 28:
                            var2 = var0.contexts;
                            var1 = global;
                            var5 = var1.Object;
                            var4 = var5.assign;
                            var3 = {};
                            var1 = _closure2_slot0;
                            var6 = var1.currentRoute;
                            var1 = new Array(1);
                            var1[0] = var6;
                            var3.view_names = var1;
                            var1 = var0.contexts;
                            var1 = var1.app;
                            var1 = var4.bind(var5)(var3, var1);
                            var2.app = var1;
                        case 99:
                            return var0;
                    }
                };
                var0.processEvent = var4;
                var0.options = var3;
                var0.state = var2;
                var1 = function arg0() {
                    var1 = _closure2_slot0;
                    var0 = arg0;
                    var1.currentRoute = var0;
                    var0 = undefined;
                    return var0;
                };
                var0.setCurrentRoute = var1;
                return var0;
        }
    };
    var2.reactNativeTracingIntegration = var4;
    var3 = function() {
        _fun12715: for (var _fun12715_ip = 0;;) switch (_fun12715_ip) {
            case 0:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 4;
                var1 = var2[var1];
                var2 = undefined;
                var3 = var3.bind(var2)(var1);
                var1 = var3.getClient;
                var1 = var1.bind(var3)();
                if (var1) {
                    _fun12715_ip = 40;
                    continue _fun12715
                }
            case 38:
                return var2;
            case 40:
                var0 = _closure1_slot5;
                var0 = var0.bind(var2)(var1);
                return var0;
        }
    };
    var2.getCurrentReactNativeTracingIntegration = var3;
    var2.getReactNativeTracingIntegration = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [999, 1159, 814, 1021, 817]);